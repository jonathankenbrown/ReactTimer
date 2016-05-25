var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)'); // jQuery to find button that has name Pause (contains)

            expect($pauseButton.length).toBe(1); //length shows how many of "Pause Button" found
        });
    });
    
    it('should render start when paused', () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var $pauseButton = $el.find('button:contains(Start)'); // jQuery to find button that has name Pause (contains)

        expect($pauseButton.length).toBe(1); //length shows how many of "Pause Button" found
    });
});
