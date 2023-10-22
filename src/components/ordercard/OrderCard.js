import { Avatar, AvatarGroup, Tooltip, TooltipGroup } from "@mantine/core"
import React from "react"
import { useSelector } from "react-redux"
import "./orderCard.css"

const OrderCard = ({ order }) => {
  const { products } = useSelector((store) => store.cart)
  console.log(products)
  return (
    <div className="cart_item_container">
      <div className="order_card">
        <TooltipGroup>
          <AvatarGroup className="order_img" spacing="xs">
            {order?.orderedItems.map((item) => {
              let product = products.find((i) => i.title === item.description)
              console.log(product)
              console.log(item)
              return (
                <Tooltip label={item?.description} withArrow>
                  <Avatar src={product?.image} alt="img" />
                </Tooltip>
              )
            })}
          </AvatarGroup>
        </TooltipGroup>
        <div className="order_right">
          <div className="order_status">{order.status}</div>
          <div className="order_amount">
            <span>&#8377;</span>
            {order.paid}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
