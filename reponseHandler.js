const responseHandler = {
  success: (data, message) => {
    if (data && message) {
      return {
        status: 'success',
        data: { ...data },
        message: message
      }
    } else if (data) {
      return {
        status: 'success',
        data: { ...data }
      }
    } else if (message) {
      return {
        status: 'success',
        message: message
      }
    }
  },
  failure: (message) => {
    return {
      status: 'fail',
      message
    };
  }
};

module.exports = { responseHandler };
