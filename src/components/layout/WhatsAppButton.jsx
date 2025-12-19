import { motion } from "framer-motion";
import WaterButton from "../home/btn/WaterButton";

export default function WhatsAppButton() {
  return (
    <motion.div
      drag
      className="
        fixed
        bottom-20
        right-6
        z-40
        flex
        items-center
        justify-center
      "
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <WaterButton
        href="https://wa.me/1234567890"
        text="Appointments Now"
        className="bg-transparent"
      />
    </motion.div>
  );
}
