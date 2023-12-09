export const ColIndented = ({ children }) =>
  <div className="grid grid-cols-10">
    <div className="col-span-10 col-start-2 xs:col-start-3 sm:col-start-5 2xl:col-start-6">
      { children }
    </div>
  </div>