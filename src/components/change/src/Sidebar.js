import withStyles from './withStyles';

const Sidebar = ({ children, styles: { animations, breakpoints, colors } }) => (
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

export default withStyles(Sidebar);
