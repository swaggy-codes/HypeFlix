import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName, setSignOutState, selectUserPhoto, setUserLoginDetails } from "../features/user/userSlice";
import { useEffect } from "react";

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push("/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else if (userName) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    history.push("/");
                })
                .catch((err) => alert(err.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <a href="/home">
                <Logo>
                    <img src="/images/png_logo_1.svg" alt="HypeFlix"></img>
                </Logo>
            </a>
            {
                !userName ? (<Login onClick={handleAuth}>LogIn</Login>
                ) : (
                    <>
                        <NavMenu>
                            <a href="/home">
                                <img src="/images/home-icon.svg" style={{ color: "yellow" }} alt="HOME" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg" alt="SEARCH" />
                                <span>SEARCH</span>
                            </a>
                            {/* <a>
                                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                                <span>ORIGINALS</span>
                            </a> */}
                            <a>
                                <img src="/images/movie-icon.svg" alt="MOVIES" />
                                <span>DECADE'S BLOCKBUSTERS</span>
                            </a>
                            {/* <a>
                                <img src="/images/series-icon.svg" alt="SERIES" />
                                <span>SERIES</span>
                            </a> */}
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <ul>
                                    <li><span onClick={handleAuth}>Sign Out</span></li>
                                    <hr />
                                    <li><span>Settings</span></li>
                                    <hr />
                                    <li>Help</li>
                                    <hr />
                                    <li>Contact Us</li>
                                </ul>
                            </DropDown>
                        </SignOut>
                    </>
                )}
        </Nav>
    );
};



const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 60px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 80%;      
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center; 
        padding: 0px 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(252, 244, 3);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.5;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        
            &:before {
                background-color: rgb(252, 244, 3);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.84) 0s;
                visibiltiy: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: #000006;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.42px;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 50px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 4px;
    width: 12.5em;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover {
        ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
        }
    }
`;

export default Header;