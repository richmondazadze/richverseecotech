declare module 'aos' {
  interface AOS {
    init(options?: object): void;
    refresh(once?: boolean): void;
  }
  
  const aos: AOS;
  export default aos;
}

interface Window {
  AOS: {
    init(options?: object): void;
    refresh(once?: boolean): void;
  };
}