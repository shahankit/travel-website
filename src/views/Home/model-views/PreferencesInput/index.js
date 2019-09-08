import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as s from './styles';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

@inject('model')
@observer
class PreferencesInput extends Component {
  render() {
    const { model } = this.props;
    const { isFormValid } = model.store;
    const {
      handleSeachTextChange,
      handleCheckInChange,
      handleCheckOutChange,
      handleGuestsChange,
      handleCheckAvailability
    } = model.actions;

    return (
      <div css={s.root}>
        <div css={s.location}>
          <div css={s.title}>Where do you want to go?</div>
          <Input
            onChange={handleSeachTextChange}
            css={s.input}
            placeholder="country, ZIP, postal code, city..."
          />
        </div>
        <div css={s.separator} />
        <div css={s.checkInOut}>
          <div css={s.title}>Check In</div>
          <Input
            onChange={handleCheckInChange}
            placeholder="choose a date"
            type="date"
            css={s.input}
          />
        </div>
        <div css={s.separator} />
        <div css={s.checkInOut}>
          <div css={s.title}>Check Out</div>
          <Input onChange={handleCheckOutChange} type="date" css={s.input} />
        </div>
        <div css={s.separator} />
        <div css={s.guests}>
          <div css={s.title}>Guests</div>
          <Input
            onChange={handleGuestsChange}
            placeholder="# guests"
            type="number"
            min={1}
            max={10}
            css={s.input}
          />
        </div>
        <Button
          disabled={!isFormValid}
          onClick={handleCheckAvailability}
          css={s.button}
        >
          Check availability
        </Button>
      </div>
    );
  }
}

export default PreferencesInput;
