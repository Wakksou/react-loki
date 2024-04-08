const Main = ({ name, url , price }) => {
        return (
        <div className="progress-bar">
        <h3>{name}</h3>
        <img src={url}
        ></img>
        <span>{price}euros</span>
        </div>
        );
};
export default Main;
