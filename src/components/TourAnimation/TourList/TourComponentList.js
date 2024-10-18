import TourComponent from './TourComponent.js'; 
import styles from './TourComponentList.module.scss';

const TourComponentList = ({ tours }) => {
    return (
        <div className={styles["container"]}>
            <hr className={styles["list-line"]}/>
            <div className={styles["tour-list"]}>
                {tours.map((tour, index) => (
                    <div key={index} className={styles["tour-list-item"]}>    
                        <TourComponent
                            title={tour.title}
                            paragraph={tour.paragraph}
                            arrow={tour.arrow}
                            image={tour.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourComponentList;