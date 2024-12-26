import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        list: [
            {
                name: 'adidas',
                imageUrl: 'https://picsum.photos/200',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 1500,
                category: 'shoe'
            },
            {
                name: 'nike',
                imageUrl: 'https://picsum.photos/200',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 1800,
                category: 'shoe'
            },
            {
                name: 'adidas',
                imageUrl: 'https://picsum.photos/200',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 650,
                category: 'gap'
            },
            {
                name: 'vans',
                imageUrl: 'https://picsum.photos/200',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 250,
                category: 'shoe'
            },
        ]
    }),
    actions: {
        filterProducts(searchText) {
            return this.list.filter(product =>
                product.name.toLowerCase().includes(searchText.toLowerCase()) || product.category.toLowerCase().includes(searchText.toLowerCase()))
        }
    }
})
