import { Button } from "@chakra-ui/react";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import React from "react";
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_REQUESTED,
} from "../redux/actions/appAction";
import { connect } from "react-redux";

const CustomButton = ({ changeCurrentUser }) => {
  return (
    <Button
      onClick={changeCurrentUser}
      mt={6}
      fontSize="1.3em"
      colorScheme="twitter"
      leftIcon={<FaTwitter />}
    >
      Twitter
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentUser: () => dispatch({ type: SET_CURRENT_USER_REQUESTED }),
});

export default connect(null, mapDispatchToProps)(CustomButton);
