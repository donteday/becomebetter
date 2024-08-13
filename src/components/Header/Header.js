import './Header.css'

const Header = ({spentAmount}) => {
    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    const currentMonth = new Date().getMonth();

    return (<div className='header__container'>
        <p>{monthNames[currentMonth]}</p>
        <p className='header__spent'>{spentAmount}</p>
    </div>);
}

export default Header;