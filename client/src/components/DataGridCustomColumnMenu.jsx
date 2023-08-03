import {
    GridColumnMenuContainer,
    GridColumnMenu,
    disableColumnMenu,
  } from "@mui/x-data-grid";
  
  const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open } = props;
    return (
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
      >
        <GridColumnMenu  onClick={hideMenu} column={currentColumn} />
        <disableColumnMenu onClick={hideMenu} column={currentColumn} />
      </GridColumnMenuContainer>
    );
  };
  
  export default CustomColumnMenu;