import {useState, useRef, useEffect } from "react";
// import Paginator from "../helper/paginator";
// import Spinner from "../helper/spinner";


// import moment from 'moment'



export default function Orgparent() {
  // console.log({Data})
  const CSVLinkRef= useRef(null)
  const [csvProps, setCsvProps]= useState({
      data:[],
      headers:[],
      filename:"mently_organizations_sheet.csv"
  })

  const [loading, setLoading] = useState(false);
  const { loggedUser } = useContext(DashboardContext);
  const router= useRouter()
  // console.log({loggedUser})
//   console.log({listOrgs})
  const [skipPag, setSkipPag] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [take, setTake]= useState(6)
  // const { orgs, totalNumOfOrgs} = listOrgs;
  const [orgsData, setOrgsData] = useState(null);
  const [total, setTotal]= useState(0)
  const [mounted, setMounted]= useState(false)

  const getOrgs=async(skip, take=6)=>{
    setLoading(true)
    const orgObj= await ListOrgsReq({take, skip:skip*take})
    console.log(skip*take)
    setTotal(orgObj.totalNumOfOrgs)
    setLoading(false)
    setSkipPag(skip)
    setTake(take)
    setOrgsData(orgObj)
    setStartIndex(skip*take)
    return 
}
const downloadAllOrgs=async(kind)=>{
  if(!kind) return 

  const allOrgsData= await ListOrgsReq({})

  const allOrgs= allOrgsData.orgs.map(({org,img},idx)=>(
      {...org, id:idx+1, 
      speciality:org.speciality.join(','),
      createdAt:moment(org.createdAt).format('MMMM Do YYYY'),
      createdTime:moment(org.createdAt).format('LT')
      }
  ))
  if(kind=="excel"){
      const sheet_name='organizations_sheet'
      const file_name= loggedUser.username+"_organizations_sheet.xlsx"

      console.log({sheet_name,file_name})
      
      exportExcel({
          sheet_data:allOrgs, 
          sheet_name, 
          file_name
      })
  }
  if(kind=="csv"){
      const cols=Object.keys(allOrgs[0])
      const headers=cols.map((col)=>(
          {
              label:col,key:col
          }
      ))
      const new_Report={
        filename: loggedUser.username+"_org_sheet.csv"
        ,headers, data:allOrgs
      }
      setCsvProps(new_Report)
      
      setTimeout(() => {
          CSVLinkRef.current.link.click()                
      }, 500);
  }

}  
useEffect(() => {
  if (mounted) return
  console.log({take,skip})
  const getQueryObj= window.localStorage.getItem('queryObj')
  if(!getQueryObj){
    getOrgs(0,6)
    setMounted(true)
    return
  }
  let queryObjToJson= JSON.parse(getQueryObj)
  if(queryObjToJson.ex_path !== router.pathname){
    getOrgs(0,6)
  //   window.localStorage.removeItem('queryObj')
    setMounted(true)  
    return
  } 
  let {take, skip}= queryObjToJson
  getOrgs(parseInt(skip),parseInt(take))
  
  window.localStorage.removeItem('queryObj')
  setMounted(true)
  return
  // getOrgs(0,6)
  // setMounted(true)
}, [mounted]);

  return (
    <main className={styles.dashboard}>
      <Dashboardheader route="activities" />
      <Dataloading propsVar={orgsData}>
      <div className={styles.mainactiv}>
        
        <CSVLink ref={CSVLinkRef} 
          {...csvProps}
          style={{display:"none"}}
          target="_blank"
          />
       
        <Checkifprops propsVarlength={total} propsVar="Organization">
          <Menucall disableGen={total}
          latest="Organizations"
          onClick={(skip)=>downloadAllOrgs(skip)}/>
          <div style={{ position: "relative" }}>
            {loading && <Spinner />}
    
            <Orgtable
             startIndex={startIndex}
                orgs={orgsData?.orgs}
                take={take} skip={skipPag}
            />
            
          </div>

          <Paginator
            startIndex={startIndex}
            currentPag={skipPag}
            onPageClick={(skip,take) => getOrgs(skip,take)}
            take={take}
            total={total}
          />
        </Checkifprops>
      </div>
      </Dataloading>
    </main>
  );
}
