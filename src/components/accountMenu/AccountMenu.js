import {
  Avatar,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from "@mantine/core"
import React from "react"
import "./accountMenu.css"
import { useNavigate } from "react-router-dom"
import { useDispatch} from "react-redux"
import { removeUser } from "../../features/user/userSlice"

const AccountMenu = ({ user }) => {
  const dispatch = useDispatch()
  const refresh = useNavigate()
  const avatarLetter = user?.name.split("")[0]
  

  const logOut = () => {
    dispatch(removeUser())
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <Menu trigger="hover" width={200}>
      <MenuTarget>
        <Avatar size="2.5rem" className="account_icon" color="cyan" radius="xl">
          {avatarLetter}
        </Avatar>
      </MenuTarget>
      <MenuDropdown>
        <MenuLabel>Account</MenuLabel>
        <MenuItem onClick={() => refresh('/my_orders')}>My orders</MenuItem>
        <MenuItem onClick={() => logOut()}>Log out</MenuItem>
      </MenuDropdown>
    </Menu>
  )
}

export default AccountMenu
