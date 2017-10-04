import { animations, breakpoints, colors } from '../styles';

const Sidebar = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: none;
        background-color: ${colors.white};

        @media (min-width: ${breakpoints.medium}) {
          width: 50vw;
        }
      }
    `}</style>
  </div>
);

export default Sidebar;
