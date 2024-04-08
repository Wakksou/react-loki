const Dish = ({ name, url , price }) => {
        return (
        <div className="progress-bar">
        <h3>{name}</h3>
        <img src={url}/>
        <span>{price}euros</span>
        </div>
        );
};
export default Dish;
