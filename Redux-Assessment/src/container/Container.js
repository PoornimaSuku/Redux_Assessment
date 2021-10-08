import React from "react";

import { connect } from "react-redux";
import Dropdown from '../components/Dropdown'
import {getabilities } from "../actions/getAbilities";


    const mapStateToProps = (state) => {
        return {
          result: state.event.result,
          error: state.event.error,
        };
      };
      const mapDispatchProps = (dispatch) => ({
        getabilities: (pokemon) => dispatch(getabilities(pokemon)),
      });
      
      export default connect(mapStateToProps, mapDispatchProps)(Dropdown);

