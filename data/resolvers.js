const resolveFunctions = {
  RootQuery: {
    user(root, { login }, context){
      return context.user.load(login);
    },
  },
  User: {
      repos(user, args, context){
          return context.repos.load(user.login);
      }
  }
};

export default resolveFunctions;