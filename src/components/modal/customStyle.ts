const customModuleStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    top: '50%',
    zIndex: '999',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    overflow: 'none',
  },
}
export default customModuleStyles
