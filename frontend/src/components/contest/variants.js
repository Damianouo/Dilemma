export const duration = {
  borderShow: 0.5,
  borderDisappear: 0.5,
  get borderTotal() {
    return this.borderShow + this.borderDisappear;
  },
};
export const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
