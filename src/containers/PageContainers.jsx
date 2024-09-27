
import Container from "@mui/material/Container";
import PropTypes from 'prop-types';

const PageContainers = ({ children }) => {
    return (
        <>
            <Container maxWidth="xl">{children}</Container>;
        </>
    )
}
PageContainers.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PageContainers
