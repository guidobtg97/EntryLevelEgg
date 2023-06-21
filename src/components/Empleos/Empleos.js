import "./empleos.css";

const Empleos = () => {
  const empleosData = [
    {
      id: 1,
      title: "Desarrollador Frontend JR",
      company: "Acme Inc.",
      location: "Ciudad XYZ",
    },
    {
      id: 2,
      title: "Diseñador UI/UX Trainee",
      company: "Widgets Co.",
      location: "Ciudad ABC",
    },
    {
      id: 3,
      title: "Analista de Datos JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 4,
      title: "Project Manager JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 5,
      title: "Sales force JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 6,
      title: "Java Trainee",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 7,
      title: "PHP JR+",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 8,
      title: "Full stack MERN JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 9,
      title: "UX Writing JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 10,
      title: "UX Research JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 11,
      title: "C# JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 12,
      title: "Ruby JR+",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 13,
      title: "Angular JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 14,
      title: "VueJS JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
    {
      id: 15,
      title: "DevOps JR",
      company: "Tech Solutions",
      location: "Ciudad PQR",
    },
  ];

  const renderEmpleosCards = () => {
    return empleosData.map((empleo) => (
      <div key={empleo.id} className="empleo-card">
        <h3>{empleo.title}</h3>
        <p>{empleo.company}</p>
        <p>{empleo.location}</p>
      </div>
    ));
  };

  return <div className="jobs-container">{renderEmpleosCards()}</div>;
};

export default Empleos;
