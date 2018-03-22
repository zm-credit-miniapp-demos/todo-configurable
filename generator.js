module.exports = function(api, options = {}) {
  api.render('./pages/config', {
    showLog: true
  });
};
