import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        checkout: {}
    }),
    getters: {
        summaryPrice(state) {
            return state.items.reduce((prev, cur) => {
                return prev + (cur.price * cur.quantity)
            }, 0)
        },
        summaryQuantity(state) {
            return state.items.reduce((prev, cur) => prev + cur.quantity, 0)
        }
    },
    actions: {
        loadCart() {
            const prevCart = localStorage.getItem('cart-data')
            if (prevCart) {
                this.items = JSON.parse(prevCart)
            }
        },
        addToCart(productData) {

            const findProductIndex = this.items.findIndex(item => item.name === productData.name && item.price === productData.price)
            if (findProductIndex < 0) {
                productData.quantity = 1
                this.items.push(productData)
            } else {
                const currentItem = this.items[findProductIndex]
                this.updateQuantity(findProductIndex, currentItem.quantity + 1)
            }

            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        updateQuantity(index, quantity) {
            this.items[index].quantity = quantity
            localStorage.setItem('cart-data', JSON.stringify(this.items))

        },
        removeItemInCart(index) {
            this.items.splice(index, 1)
            localStorage.setItem('cart-data', JSON.stringify(this.items))

        },
        placeOrder(userData) {
            const orderData = {
                ...userData,
                totalPrice: this.summaryPrice,
                paymentMethod: "Credit Card",
                totalQuantity: this.summaryQuantity,
                createdDate: (new Date()).toLocaleString(),
                orderNumber: `AA${Math.floor((Math.random() * 90000) + 10000)}`,
                products: this.items
            }
            localStorage.setItem("order-data", JSON.stringify(orderData))
        },
        loadCheckout() {
            const orderData = localStorage.getItem("order-data")
            if (orderData) {
                this.checkout = JSON.parse(orderData)
            }

        }
    }
})