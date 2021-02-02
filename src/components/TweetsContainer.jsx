import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_USER, GET_USER_REQUESTED } from "../redux/actions/appAction";

import PictureBox from "./PictureBox";
import Tweet from "./Tweet";

const TweetsContainer = ({
  user: { loading, users, currentUser },
  getUser,
}) => {
  useEffect(() => {
    getUser();
    console.log(users);
  }, []);

  return (
    <Box
      border=".7px solid #000000"
      w={{ base: "100%", lg: "600px" }}
      h={{ base: "400px", lg: "550px" }}
    >
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        <>
          <PictureBox
            imageUrl={users[currentUser][0]?.user?.profile_image_url}
            name={users[currentUser][0].user?.name}
          />
          <Box h="70%" overflowY="scroll">
            {users[currentUser].map((twt) => (
              <Tweet text={twt.text} created_at={twt.created_at} />
            ))}
            <Tweet />
          </Box>
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (name) => dispatch({ type: GET_USER_REQUESTED, payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer);
