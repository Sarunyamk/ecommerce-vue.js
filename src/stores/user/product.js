import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        list: [
            {
                name: 'adidas',
                imageUrl: 'https://images.unsplash.com/photo-1509419573860-712f07d5310f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
                quantity: 5,
                about: 'testt',
                status: 'open',
                price: 3500,
                category: 'shoe'
            },
            {
                name: 'adidas',
                imageUrl: 'https://images.unsplash.com/photo-1514514757092-71ebbc3db4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 4400,
                category: 'shoe'
            },
            {
                name: 'adidas',
                imageUrl: 'https://images.unsplash.com/photo-1586676453553-e033956389d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxhZGlkYXN8ZW58MHx8MHx8fDA%3D',
                quantity: 8,
                about: 'testt',
                status: 'open',
                price: 3000,
                category: 'shoe'
            },
            {
                name: 'adidas',
                imageUrl: 'https://images.unsplash.com/photo-1511746315387-c4a76990fdce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 1200,
                category: 'shirt'
            },
            {
                name: 'nike',
                imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
                quantity: 4,
                about: 'testt',
                status: 'open',
                price: 3200,
                category: 'shoe'
            },
            {
                name: 'nike',
                imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2V8ZW58MHx8MHx8fDA%3D',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 4500,
                category: 'shoe'
            },
            {
                name: 'nike',
                imageUrl: 'https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5pa2V8ZW58MHx8MHx8fDA%3D',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 4200,
                category: 'shoe'
            },
            {
                name: 'nike',
                imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG5pa2V8ZW58MHx8MHx8fDA%3D',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 4200,
                category: 'shoe'
            },
            {
                name: 'nike',
                imageUrl: 'https://images.unsplash.com/photo-1585032767761-878270336a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNoaXJ0fGVufDB8fDB8fHww',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 1200,
                category: 'shirt'
            },
            {
                name: 'vans',
                imageUrl: 'https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHZhbnN8ZW58MHx8MHx8fDA%3D',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 2600,
                category: 'shoe'
            },
            {
                name: 'vans',
                imageUrl: 'https://images.unsplash.com/photo-1595179562588-e73fd557ef00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx2YW5zfGVufDB8fDB8fHww',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 2600,
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
