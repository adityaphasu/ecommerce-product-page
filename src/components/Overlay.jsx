import { motion } from "framer-motion";

const Overlay = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 size-full bg-black/75"
      onClick={onClick}></motion.div>
  );
};
export default Overlay;
