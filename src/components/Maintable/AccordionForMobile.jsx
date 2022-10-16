import './Logo.css'

export default function AccordionForMobile() {
    return (
        <div className={styles.mobile}>
        {orgs.map((an_org, index) => (
          <div
            key={index}
            className={styles.accord}
            onClick={
              showAcc && actAcc === index
                ? () => hideAcc()
                : () => displayAcc(index)
            }
          >
            <div className={styles.accordflex}>
              <div className={styles.accorddt}>
                <h4>{an_org.org.name}</h4>
                <p>{an_org.org.email}</p>
              </div>

              <svg
                style={
                  showAcc && actAcc == index
                    ? {
                        transform: "rotate(180deg)",
                      }
                    : { transform: "rotate(0deg)" }
                }
                width="18"
                height="18"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9983 9.77509L21.0696 0.514914C21.3923 0.185116 21.8288 0 22.2838 0C22.7389 0 23.1756 0.185116 23.4983 0.514914C23.6573 0.676776 23.7834 0.869338 23.8696 1.08165C23.9557 1.29395 24 1.52176 24 1.7518C24 1.98183 23.9557 2.20964 23.8696 2.42195C23.7834 2.63425 23.6573 2.82682 23.4983 2.98868L13.2143 13.4851C12.8915 13.8149 12.455 14 12 14C11.545 14 11.1085 13.8149 10.7857 13.4851L0.501676 2.98868C0.342696 2.82682 0.216575 2.63425 0.130449 2.42195C0.0443217 2.20964 0 1.98183 0 1.7518C0 1.52176 0.0443217 1.29395 0.130449 1.08165C0.216575 0.869338 0.342696 0.676776 0.501676 0.514914C0.82465 0.185548 1.26125 0.000653168 1.71616 0.000653168C2.17107 0.000653168 2.60746 0.185548 2.93043 0.514914L11.9983 9.77509Z"
                  fill="#809FB8"
                />
              </svg>
            </div>
            <AccordionList
              show={showAcc && actAcc == index}
              act={an_org.org}
              cols={cols}
              saveToLocalStorageB4move={saveToLocalStorageB4move}
              isDirectLink={isDirectLink}
              parentPath={parentPath}
            />
          </div>
        ))}
      </div>
    );
}
function AccordionList({
    saveToLocalStorageB4move,
    isDirectLink,
    show = false,
  }) {
    // console.log({act,cols})
    return (
      <div
        className={styles.dropdown}
        style={
          show
            ? {
                maxHeight: "999px",
                overflow: "hidden",
                transition: "all 0.2s ease-in-out",
              }
            : {
                maxHeight: "0",
                overflow: "hidden",
                transitionProperty: "all",
                transitionDuration: "0.2s",
                transitionTimingFunction: "cubic-bezier(0, 1, 0.5, 1)",
              }
        }
      >
        <div className={styles.fields}>
          <h5>Category</h5>
          <p>{item.category}</p>
        </div>
        <div className={styles.fields}>
          <h5>Username</h5>
          <p>{item.username}</p>
        </div>
        <div className={styles.fields}>
          <h5>Date Created</h5>
          <p>
            {new Date(item.createdAt).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className={styles.fields}>
          <h5>Options</h5>
          <div
            className={styles.alink}
            style={{ cursor: "pointer", fontSize: "0.7em", color: "#ffa500" }}
          >
            {isDirectLink ? (
              <Link href={`/organizations/${item.name}`}>
                <a onClick={(e)=>saveToLocalStorageB4move(e, `/organizations/${item.name}`)} 
                className={styles.seemore}>
                  <p>details</p>
                  <img src="/svg/more.svg" />
                </a>
              </Link>
            ) : (
              <button className={styles.seemore}>
                <p>show all</p>
                <img src="/svg/more.svg" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }  