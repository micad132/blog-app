import { NavLink } from "react-router";
import styled from "styled-components";


const NavWrapper = styled.nav`
    border-top: 1px solid #fff;
    display: flex;
    gap: 20px;
    padding: 10px 0;
    align-items: center;
    justify-content: center;

    a.active {
        color: white;
    }
    
`

const StyledNavLink = styled(NavLink)`
    position: relative;
    text-decoration: none;
    padding: 4px 0;

    &:active {
        color: white;
    }
    
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: white;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`

const NavContainer = () => {
    return (
        <NavWrapper>
            <StyledNavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >Home</StyledNavLink>
            <StyledNavLink to="/comments">Comments</StyledNavLink>
            <StyledNavLink to="/posts">Posts</StyledNavLink>
        </NavWrapper>
    )
}

export default NavContainer;
