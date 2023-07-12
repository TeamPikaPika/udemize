export const cookieController = {
  setSSIDCookie: async (req, res, next) => {
    const { id } = res.locals.user;
    try {
      res.cookie('ssid', id, { httpOnly: true });
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
