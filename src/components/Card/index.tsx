import './Card.css'

export default function Card(
    {
        label, numbers, index
    }: {
        label: string; numbers:string; index:number;
      }
) {
    return (
      <div className='card'>
        <img src={`/svg/card/users${index}.svg`} alt={label+' icon'} />
        <p className='card-p'>{label}</p>
        <p className='card-body'>{numbers}</p>
      </div>
    );
}
  