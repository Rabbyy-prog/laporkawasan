import ReportCard from "./ReportCard";

const reports =[
  { id:1, title: "Pothole at Jalan 5", category: "Road", status:"open"},
  { id:2, title: "Broken streetlight", category: "Lighting", status:"fixed"},
  { id:3, title: "Illegal dumping near surau", category: "Rubbish", status:"open"},
  { id:4, title: "Clogged drain", category: "Road", status: "open"},
];

export default function App() {
  return(
    <main>
      <h1>LaporKawasan</h1>

      {reports.map((r) => (
    <ReportCard key={r.id} title={r.title} category={r.category} status={r.status}/>
    ))}
    </main>
  );
}