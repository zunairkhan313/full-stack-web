// "use client";

// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";

// export default function UserInfo() {
//   const { data: session } = useSession();

//   return (
//     <div className="grid place-items-center h-screen">
//       <div className="flex gap-2">
//         <div>
//         <span className="font-bold">{session?.user?.name}</span>
//         </div>
        
//         <button
//           onClick={() => signOut()}
//           className=" text-black font-bold "
//         >
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }