import styled from 'styled-components'

export const NavHeader = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    padding-left: 40px;
    padding-right: 40px;
    position: sticky;
    scroll-behavior: smooth;
    height: 60px;
    background-color: ${props => props.bgColor}
}
@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 15px;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 15px;
  padding: 15px;
`

export const ProfileImg = styled.img`
  width: 50px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 2px solid grey;
  padding: 15px;
  padding-right: 22px;
  padding-left: 22px;
  color: grey;
  margin: 13px;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 17px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 27px;
  margin: 12px;
  color: black;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 16px;
  padding-right: 22px;
  padding-left: 22px;
  border: none;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 17px;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`



export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 14px;
  margin-left: 14px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 16%;
`

export const ContentListItem = styled.li`
  display: flex;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  padding: 9px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 5px;
  margin-left: 15px;
  cursor: pointer;
  outline: none;
`
