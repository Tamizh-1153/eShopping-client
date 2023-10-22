import axios from "axios"
import { toast } from "react-toastify"

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASEURL}/api/v1`,
})

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products/all")
    return response.data
  } catch (error) {
    toast.error("Error getting all products")
    throw error
  }
}

export const getUserInfo = async () => {
  try {
    const response = await api.get("/user/info", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return response.data
  } catch (error) {
    toast.error("Error getting user info")
    throw error
  }
}

export const createUser = async ({ name, email, password }) => {
  try {
    const res = await api.post("/register", { name, email, password })
    return res.data
  } catch (error) {
    toast.error("Error registering user")
    throw error
  }
}

export const userLogin = async ({ email, password }) => {
  try {
    const res = await api.post("/login", { email, password })
    return res.data
  } catch (error) {
    toast.error("Error Logging in")
    throw error
  }
}

export const forgotPassword = async (email) => {
  try {
    const res = await api.post("/forgot_password", { email })
    return res.data
  } catch (error) {
    toast.error("Error sending password reset link")
    throw error
  }
}

export const resetPassword = async ({ id, token, password }) => {
  try {
    const res = await api.post(`/reset_password/${id}/${token}`, {
      password,
    })
    return res.data
  } catch (error) {
    toast.error("Error updating password")
    throw error
  }
}

export const getCartItems = async () => {
  try {
    const response = await api.get("/user/cart", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return response.data
  } catch (error) {
    toast.error("Error getting cart items")
    throw error
  }
}

export const getOrders = async () => {
  try {
    const response = await api.get("/user/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return response.data
  } catch (error) {
    toast.error("Error getting cart items")
    throw error
  }
}

export const updateCartItems = async (cartItems) => {
  try {
    const response = await api.post(
      "/user/updateCart",
      {
        cartItems,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    return response.data
  } catch (error) {
    toast.error("Error getting user info")
    throw error
  }
}

export const checkout = async ({ cartItems, user }) => {
  try {
    const response = await api.post(
      "/user/create-checkout-session",
      {
        cartItems,user
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    window.location = response.data.url
    return response.data
  } catch (error) {
    toast.error("Error posting cart items")
    throw error
  }
}
