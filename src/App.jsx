import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import Loader2 from "./components/Loader"
import Layout from "./Layout/Layout"


const Home=lazy(()=>import("./pages/Home"))
const NotFound=lazy(()=>import("./pages/NotFound"))
const Blog=lazy(()=>import("./pages/Blog"))
const Contact=lazy(()=>import("./pages/Contact"))
const Info=lazy(()=>import("./pages/Info"))
const Cart=lazy(()=>import("./pages/Cart"))
const Checkout=lazy(()=>import("./pages/Checkout"))
const Pay=lazy(()=>import("./pages/Pay"))

const Sales=lazy(()=>import("./pages/Sales"))
const Sales2=lazy(()=>import("./pages/Sales2"))

const Private=lazy(()=>import("./pages/Private"))

const Password1=lazy(()=>import("./pages/Password1"))
const Password2=lazy(()=>import("./pages/Password2"))
const Password3=lazy(()=>import("./pages/Password3"))
const Register=lazy(()=>import("./pages/Register"))


export default function App() {

let router=createBrowserRouter([
    {
      path:"/",
      element:(
        <Suspense fallback={<Loader2/>}>
<Layout/>
        </Suspense>
      )  ,
      children:[
        {
            index:true,
            element:(
        <Suspense fallback={<Loader2/>}>
<Home/>
        </Suspense>),

        },
        {
path:"/info/:id",
element:(
        <Suspense fallback={<Loader2/>}>
<Info/>
        </Suspense>),
        }
         ,
          {
path:"/cart",
element:(
        <Suspense fallback={<Loader2/>}>
<Cart/>
        </Suspense>),
        }
        ,
           {
path:"/private",
element:(
        <Suspense fallback={<Loader2/>}>
<Private/>
        </Suspense>),
        },
          {
path:"/sales",
element:(
        <Suspense fallback={<Loader2/>}>
<Sales/>
        </Suspense>),
        }
             ,
          {
path:"/sales2/:id",
element:(
        <Suspense fallback={<Loader2/>}>
<Sales2/>
        </Suspense>),
        },
        
          {
path:"/checkout",
element:(
        <Suspense fallback={<Loader2/>}>
<Checkout/>
        </Suspense>),
        },
            {
path:"/pay",
element:(
        <Suspense fallback={<Loader2/>}>
<Pay/>
        </Suspense>),
        },
        {
            path:"/blog",
            element:(
        <Suspense fallback={<Loader2/>}>
<Blog/>
        </Suspense>),

        },
         {
            path:"/contact",
            element:(
        <Suspense fallback={<Loader2/>}>
<Contact/>
        </Suspense>),

        }
      ]
    },
        {
            path:"*",
            element:(
        <Suspense fallback={<Loader2/>}>
<NotFound/>
        </Suspense>),

        },
            {
            path:"/forgotPassword",
            element:(
        <Suspense fallback={<Loader2/>}>
<Password1/>
        </Suspense>),

        },
          {
            path:"/newPassword",
            element:(
        <Suspense fallback={<Loader2/>}>
<Password2/>
        </Suspense>),

        },
         {
            path:"/passwordRecreated",
            element:(
        <Suspense fallback={<Loader2/>}>
<Password3/>
        </Suspense>),

        },
          {
            path:"/register",
            element:(
        <Suspense fallback={<Loader2/>}>
<Register/>
        </Suspense>),

        },
])


  return <RouterProvider router={router}/>
}
