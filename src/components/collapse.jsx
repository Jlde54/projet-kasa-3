import '../styles/components/collapse.css'

function Collapse (props) {
  return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
  );
};

export default Collapse;