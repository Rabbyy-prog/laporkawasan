export default function ReportCard(props){
    return(
        <div className="card">
            <h3>{props.title}</h3>
            <p>Category: {props.category}</p>
            <p>Status: {props.status}</p>
        </div>
    );
}