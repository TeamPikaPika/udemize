export const cookieController = {
  //   setCookie: (req, res, next) => {
  //     res.cookie('codesmith', 'hi');
  //     res.cookie('secret', Math.floor(Math.random() * 100));
  //     return next();
  //   },
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
