import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { IoReturnUpBack } from 'react-icons/io5';

interface Lead {
  id: string;
  name: string;
  leadDate: string;
  phoneNumber: string;
  email: string;
  status: string;
  // Add other properties based on the API response
}



export const salesDashboardData = {
    statisticData: {
        revenue: {
            value: 21827.13,
            growShrink: 11.4,
        },
        orders: {
            value: 1758,
            growShrink: -3.2,
        },
        purchases: {
            value: 7249.31,
            growShrink: 5.7,
        },
    },
    salesReportData: {
        series: [
            {
                name: 'Online Sales',
                data: [24, 33, 29, 36, 34, 43, 40, 47, 45, 48, 46, 55],
            },
            {
                name: 'Marketing Sales',
                data: [20, 26, 23, 24, 22, 29, 27, 36, 32, 35, 32, 38],
            },
        ],
        categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
            '09 Jan',
            '10 Jan',
            '11 Jan',
            '12 Jan',
        ],
    },
    topProductsData: [
        {
            id: '12',
            name: 'Luminaire Giotto Headphones',
            img: '/img/products/product-1.jpg',
            sold: 252,
        },
        {
            id: '14',
            name: 'Black Sneaker',
            img: '/img/products/product-3.jpg',
            sold: 186,
        },
        {
            id: '15',
            name: 'Gray Hoodies',
            img: '/img/products/product-4.jpg',
            sold: 166,
        },
        {
            id: '16',
            name: 'Blue Backpack',
            img: '/img/products/product-5.jpg',
            sold: 93,
        },
        {
            id: '18',
            name: 'Strip Analog Watch',
            img: '/img/products/product-7.jpg',
            sold: 81,
        },
    ],
    latestOrderData: [
        {
            id: '95954',
            date: 1660132800,
            customer: 'Ron Vargas',
            status: 0,
            paymentMehod: 'visa',
            paymentIdendifier: '•••• 6165',
            totalAmount: 168,
        },
        {
            id: '95423',
            date: 1659132800,
            customer: 'Carolyn Hanso',
            status: 0,
            paymentMehod: 'visa',
            paymentIdendifier: '•••• 7128',
            totalAmount: 523,
        },
        {
            id: '92903',
            date: 1658132800,
            customer: 'Gabriella May',
            status: 1,
            paymentMehod: 'paypal',
            paymentIdendifier: '••••@gmail.com',
            totalAmount: 81,
        },
        {
            id: '92627',
            date: 1657332800,
            customer: 'Tara Fletcher',
            status: 2,
            paymentMehod: 'master',
            paymentIdendifier: '•••• 0921',
            totalAmount: 279,
        },
        {
            id: '89332',
            date: 1654132800,
            customer: 'Eileen Horton',
            status: 0,
            paymentMehod: 'paypal',
            paymentIdendifier: '••••@gmail.com',
            totalAmount: 597,
        },
        {
            id: '86497',
            date: 1647632800,
            customer: 'Lloyd Obrien',
            status: 2,
            paymentMehod: 'visa',
            paymentIdendifier: '•••• 0443',
            totalAmount: 189,
        },
        {
            id: '86212',
            date: 1646832800,
            customer: 'Tara Fletcher',
            status: 0,
            paymentMehod: 'paypal',
            paymentIdendifier: '••••@gmail.com',
            totalAmount: 672,
        },
    ],
    salesByCategoriesData: {
        labels: ['Devices', 'Watches', 'Bags', 'Shoes'],
        data: [351, 246, 144, 83],
    },
}



  
  
  




const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/lead/');
const jsonData = await response.json();
export const productsData=jsonData.data

const responseProject = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project?id=65c32e19e0f36d8e1f30955c');
const jsonProject = await responseProject.json();
export const projectdata=jsonProject
       
// export const productsData=[
//     {
//       _id: "65c35bd30bd5c3b0ec1ed5bb",
//       name: "Devashish Gupta",
//       lead_id: "833500",
//       email: "Devashishgupta20102000@gmail.com",
//       phone: "+916389707199",
//       location: "delhi",
//       status: "Follow Up",
//       source: "Online",
//       notes: [
//         {
//           content: "this is a candidate referred by arvind",
//           createdBy: "Admin",
//           _id: "65c35bd30bd5c3b0ec1ed5bc",
//           createdAt: "2024-02-07T10:30:43.883Z",
//         },
//       ],
//       createdAt: "2024-02-07T10:30:43.883Z",
//       __v: 0,
//     },
//   ];


const response1 = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project/mom');
const jsonData1= await response1.json();

export const ordersData =jsonData1.data

// export const ordersData = [
//     {
//         id: '95954',
//         date: 1660132800,
//         customer: 'Ron Vargas',
//         status: 0,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 6165',
//         totalAmount: 168,
//     },
//     {
//         id: '95423',
//         date: 1659132800,
//         customer: 'Carolyn Hanso',
//         status: 0,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 7128',
//         totalAmount: 523,
//     },
//     {
//         id: '92903',
//         date: 1658132800,
//         customer: 'Gabriella May',
//         status: 0,
//         paymentMehod: 'paypal',
//         paymentIdendifier: '••••@gmail.com',
//         totalAmount: 81,
//     },
//     {
//         id: '92627',
//         date: 1657332800,
//         customer: 'Tara Fletcher',
//         status: 0,
//         paymentMehod: 'master',
//         paymentIdendifier: '•••• 0921',
//         totalAmount: 279,
//     },
//     {
//         id: '92509',
//         date: 1656232800,
//         customer: 'Joyce Freeman',
//         status: 1,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 1232',
//         totalAmount: 831,
//     },
//     {
//         id: '91631',
//         date: 1655532800,
//         customer: 'Brittany Hale',
//         status: 0,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 4597',
//         totalAmount: 142,
//     },
//     {
//         id: '90963',
//         date: 1654932800,
//         customer: 'Luke Cook',
//         status: 0,
//         paymentMehod: 'master',
//         paymentIdendifier: '•••• 3881',
//         totalAmount: 232,
//     },
//     {
//         id: '89332',
//         date: 1654132800,
//         customer: 'Eileen Horton',
//         status: 1,
//         paymentMehod: 'paypal',
//         paymentIdendifier: '••••@gmail.com',
//         totalAmount: 597,
//     },
//     {
//         id: '89107',
//         date: 1650132800,
//         customer: 'Frederick Adams',
//         status: 2,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 3356',
//         totalAmount: 72,
//     },
//     {
//         id: '89021',
//         date: 1649832800,
//         customer: 'Lee Wheeler',
//         status: 0,
//         paymentMehod: 'master',
//         paymentIdendifier: '•••• 9564',
//         totalAmount: 110,
//     },
//     {
//         id: '88911',
//         date: 1649432800,
//         customer: 'Gail Barnes',
//         status: 0,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 1357',
//         totalAmount: 59,
//     },
//     {
//         id: '87054',
//         date: 1647932800,
//         customer: 'Ella Robinson',
//         status: 0,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 3561',
//         totalAmount: 238,
//     },
//     {
//         id: '86497',
//         date: 1647632800,
//         customer: 'Lloyd Obrien',
//         status: 2,
//         paymentMehod: 'visa',
//         paymentIdendifier: '•••• 0443',
//         totalAmount: 189,
//     },
//     {
//         id: '86212',
//         date: 1646832800,
//         customer: 'Tara Fletcher',
//         status: 0,
//         paymentMehod: 'paypal',
//         paymentIdendifier: '••••@gmail.com',
//         totalAmount: 672,
//     },
// ]







export const orderDetailsData = [
    {
        id: '95954',
        progressStatus: 0,
        payementStatus: 0,
        dateTime: 1646396117,
        paymentSummary: {
            subTotal: 1762,
            tax: 105.72,
            deliveryFees: 15,
            total: 1870.72,
        },
        shipping: {
            deliveryFees: 15,
            estimatedMin: 1,
            estimatedMax: 3,
            shippingLogo: '/img/others/img-11.jpg',
            shippingVendor: 'FedEx',
        },
        activity: [
            {
                date: 1646554397,
                events: [
                    {
                        time: 1646554397,
                        action: 'Parcel has been delivered',
                        recipient: 'Lloyd Obrien',
                    },
                    {
                        time: 1646537537,
                        action: 'Parcel is out for delivery',
                    },
                    {
                        time: 1646529317,
                        action: 'Parcel has arrived at delivery station',
                    },
                ],
            },
            {
                date: 1646442017,
                events: [
                    {
                        time: 1646462597,
                        action: 'Parcel has been picked up by courier',
                    },
                    {
                        time: 1646537537,
                        action: 'Seller is preparing to ship your parcel',
                    },
                ],
            },
        ],
        product: [
            {
                id: '13',
                name: 'White Backpack',
                productCode: 'BIS-013',
                img: '/img/products/product-2.jpg',
                price: 252,
                quantity: 2,
                total: 504,
                details: {
                    color: ['White'],
                    size: ['One size'],
                },
            },
            {
                id: '18',
                name: 'Strip Analog Watch',
                productCode: 'BIS-018',
                img: '/img/products/product-7.jpg',
                price: 389,
                quantity: 1,
                total: 389,
                details: {
                    color: ['Red'],
                    gender: ['Unisex'],
                },
            },
            {
                id: '19',
                name: 'Beats Solo Headphone',
                productCode: 'BIS-019',
                img: '/img/products/product-8.jpg',
                price: 869,
                quantity: 1,
                total: 869,
                details: {
                    color: ['Red'],
                },
            },
        ],
        customer: {
            name: 'Lloyd Obrien',
            email: 'handsome-obrien@hotmail.com',
            phone: '+1 (541) 754-3010',
            img: '/img/avatars/thumb-11.jpg',
            previousOrder: 11,
            shippingAddress: {
                line1: '100 Main ST',
                line2: 'PO Box 1022',
                line3: 'Seattle WA 98104',
                line4: 'United States of America',
            },
            billingAddress: {
                line1: '1527 Pond Reef Rd',
                line2: 'Ketchikan',
                line3: 'Alaska 99901',
                line4: 'United States of America',
            },
        },
    },
]
