import React from 'react'
import style from '@/app/ui/dashboard/products/products.module.css'
import { Search } from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import { Pagination } from '@/app/ui/dashboard/pogination/Pagination'

export default function ProductsPage() {
  return (
   <div className={style.container}>
   <div className={style.top}>
      <Search placeholder='Search for a product...'/>
      <Link href='/dashboard/products/add'>
         <button className={style.addButton}>Add new</button>
      </Link>
   </div>
   <table className={style.table}>
      <thead>
         <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Prise</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>
               <div className={style.product}>
                  <Image src='/noproduct.jpg' alt='User logo' width={40} height={40} className={style.productImage}/>
                  IPhone
               </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>03.05.2024</td>
            <td>77</td>
            <td>
               <div className={style.buttons}>
                  <Link href='/dashboard/products/test'>
                     <button className={`${style.button} ${style.view}`}>View</button>
                  </Link>
                     <button className={`${style.button} ${style.delete}`}>Delete</button>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
   <Pagination/>
 </div>
  )
}
