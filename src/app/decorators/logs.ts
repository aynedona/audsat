export function logs(action: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args);
      let logUser;
      let parameters = '';
      parameters = (args != null && args != undefined && args.length > 0  && args.toString() != '') ? `. Parâmetros: ${args}.` : '';

      logUser = `Usuário admin ${action}${parameters}`;

      const logs = JSON.parse(localStorage.getItem('logs') || '[]');

      logs.push({ method: propertyKey, args, msg: logUser, date: new Date() });
      localStorage.setItem('logs', JSON.stringify(logs));

      return result;
    }
    return descriptor;
  }
}
