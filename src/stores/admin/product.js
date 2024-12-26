import { defineStore } from 'pinia'

export const useAdminProductStore = defineStore('admin-product', {
    state: () => ({
        lists: [
        ],
        loaded: false
    }),
    actions: {
        getProduct(index) {
            if (!this.loaded) {
                this.loadProduct()
            }
            return this.lists[index]
        },
        loadProduct() {
            const product = localStorage.getItem('admin-products')
            if (product) {
                this.lists = JSON.parse(product)
                this.loaded = true
            }
        },
        addProduct(productData) {
            productData.remainQuantity = productData.quantity
            productData.updatedAt = new Date().toISOString()
            this.lists.push(productData)
            localStorage.setItem('admin-products', JSON.stringify(this.lists))
        },
        updateProduct(index, productData) {
            this.lists[index].name = productData.name
            this.lists[index].image = productData.image
            this.lists[index].price = productData.price
            this.lists[index].quantity = productData.quantity
            this.lists[index].status = productData.status
            this.lists[index].updatedAt = new Date().toISOString()
            localStorage.setItem('admin-products', JSON.stringify(this.lists))

        },
        removeProduct(index) {
            this.lists.splice(index, 1)
            localStorage.setItem('admin-products', JSON.stringify(this.lists))

        }
    }
})