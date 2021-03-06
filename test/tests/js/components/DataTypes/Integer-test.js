import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import JsonInteger from '/react/src/js/components/DataTypes/Integer';
import DataTypeLabel from '/react/src/js/components/DataTypes/DataTypeLabel';
import ConfigStore from '/react/src/js/stores/ConfigStore';

describe('<JsonInteger />', function () {
    const rjvId = 1;
    ConfigStore.set(rjvId, 'displayDataTypes', true);

    it('integer component should have a data type label', function () {
        const wrapper = shallow(
            <JsonInteger value={1} rjvId={rjvId} theme='rjv-default'/>
        );
        expect(wrapper.find(DataTypeLabel)).to.have.length(1);
    });

});