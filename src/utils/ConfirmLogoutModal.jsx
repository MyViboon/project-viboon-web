import React from "react";

// const ConfirmLogoutModal = ({ isOpen, onConfirm, onCancel }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold mb-4">
//           Are you sure you want to log out?
//         </h3>
//         <div className="flex justify-end gap-4">
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded-md"
//             onClick={onConfirm}
//           >
//             Yes, Logout
//           </button>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 rounded-md"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmLogoutModal;
function ConfirmLogoutModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">
          คุณต้องการออกจากระบบหรือไม่?
        </h3>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={onConfirm}
          >
            ตกลง
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onCancel}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmLogoutModal;
