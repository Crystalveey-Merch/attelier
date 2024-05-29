/* eslint-disable react/prop-types */
import successImg from "../../../public/Images/icons/confirm.gif";
import { Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

export const SuccessModal = ({ open, handleCloseModal }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 64px)",
    maxWidth: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    p: "24px",
    "@media (max-width: 639px)": {
      width: "calc(100% - 24px)",
      p: "16px",
    },
  };

  //   close modal and redirect to home
  // const handleCloseModal = () => {
  //     setOpen(false);
  //     router.push("/");
  //   }

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className="flex flex-col gap-6 items-center">
            <div className="px-6 py-4">
              <img
                src={successImg}
                alt="Success"
                className="h-[350px] w-[350px] sm:h-[200px] sm:w-[200px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl font-semibold text-[#000000] text-center">
                Order Placed Successfully
              </h4>
              <p className="text-base font-medium text-[#4b5563] text-center">
                Your order has been placed successfully. You will receive an
                email shortly.
              </p>
            </div>
            <button
              onClick={handleCloseModal}
              className="bg-[#FF631A] text-white py-2 px-4 rounded-md font-semibold"
            >
              Close
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
