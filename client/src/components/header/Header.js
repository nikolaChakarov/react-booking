import React, { useState } from 'react'
import styled from 'styled-components';
import { format } from 'date-fns';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi, faPuzzlePiece, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    const [openCalendar, setOpenCalendar] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleOpenCalendar = () => {
        setOpenCalendar(!openCalendar);
    }

    return (
        <HeaderContainer className='header-container'>

            <div className="header-wrapper">

                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxi</span>
                    </div>
                </div>

                <h1 className='header-title'>A lifetime of discounts? It's Genius.</h1>
                <p className="header-desc">Get rewarder for your travels - unlock instant savings of 10% or more with a free nc booking account</p>
                <button className="header-bttn">Sign in / Resister</button>

                <div className="header-search">
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faBed} className={'header-icon'} />
                        <input type="text" placeholder='Where are you going' className='header-search-input' />
                    </div>

                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className={'header-icon'} />
                        <span className="header-search-text" onClick={handleOpenCalendar}>{format(date[0].startDate, 'dd/MM/yyyy')} to {format(date[0].endDate, 'dd/MM/yyyy')}</span>

                        {openCalendar && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={'date-calendar'}
                        />}
                    </div>

                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faPerson} className={'header-icon'} />
                        <span className="header-search-text">2 adults 2 children 1 room</span>
                    </div>

                    <div className="header-search-item">
                        <button className="header-bttn">Search</button>
                    </div>
                </div>
            </div>

        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background: var(--blue);
    color: #fff;
    display: flex;
    justify-content: center;
    border-top: 1px groove var(--blue);
    position: relative;

    .header-wrapper {
        flex: 1;
        max-width: 1024px;
        margin: 20px 0 100px 0;

        .header-list {
            display: flex;
            gap: 40px;
            margin-bottom: 20px;

            .header-list-item {
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 300;
            }

            .header-list-item.active {
                border: 1px solid #fff;
                padding: 10px;
                border-radius: 5px;
            }
        }

        .header-desc {
            margin: 20px 0;
        }

        .header-bttn {
            background: var(--blue-light);
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 3px;
            font-weight: 500;
        }

        .header-search {
            height: 30px;
            border: 3px solid var(--yellow);
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 10px 0;
            border-radius: 5px;
            position: absolute;
            bottom: -25px;
            width: 100%;
            max-width: 1024px;

            .header-icon {
                color: #b3b3b3;
            }

            .header-search-item {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .header-search-input {
                border: none;
                color: #777;
            }

            .header-search-text {
                color: #777;
                cursor: pointer;
            }

            .date-calendar {
                position: absolute;
                top: 50px;
            }
        }
    }

`

export default Header