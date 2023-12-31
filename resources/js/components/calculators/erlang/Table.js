import React, { Component } from 'react';
import CommonPopover from '../../common/ui/CommonPopover';
import FormInput from '../../common/forms/FormInput';
import Formsy, { addValidationRule } from 'formsy-react';
import TimeUnitSelect from '../../common/forms/TimeUnitSelect';
import FormGroupInput from '../../common/forms/FormGroupInput';

class Table extends Component {
    constructor(props) {
        super(props);
        // Contains defaults for each field.
        this.state = {
            applyShrinkage: true,
            canSubmit: false,
            calculateAllowed: 0,
            averagePatience: 60,
            handleTime: 240,
            maxOccupancy: 90,
            incomingCalls: 100,
            reportInterval: 60,
            serviceLevel: 90,
            shrinkage: 25,
            targetAnswerTime: 30,
            timePeriod: 60,
            selections: {
                timePeriodUnits: 'minutes'
            },
            weekWorkHours: 40,
            validationErrors: {
                handleTimeBoundaries: 'Value must be between 1 and 30000',
                incomingCallsBoundaries: 'Value must be between 1 and 30000',
                timePeriodBoundaries: 'Value must be between 1 and 1000',
                percentageBoundaries: 'Value must be between 1 and 100',
                targetAnswerTimeBoundaries: 'Value must be between 1 and 30000',
                averagePatienceBoundaries: 'Value must be between 1 and 1000',
                weekWorkHoursBoundaries: 'Value must be between 1 and 80',
                reportIntervalBoundaries: 'Value must be between 5 and 1500'
            }
        };

        // Unit selections for input dropdowns.
        this.units = [
            'seconds', 'minutes', 'hours', 'weeks', 'months'
        ];

        // Submit button toggling.
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);

        // Custom validations.
        this.setupValidators();

        // State change handlers.
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleTimePeriodUnitChange = this.handleTimePeriodUnitChange.bind(this);
    }
    render() {
        return (
            <div>
                <Formsy 
                    onValidSubmit={ this.submit } 
                    onValid={ this.enableButton } 
                    onInvalid={ this.disableButton }
                >
                <table className="table table-calculator">
                    <tbody>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Incoming Calls</strong>
                                </label>
                                <CommonPopover
                                    headingId="incomingCalls"
                                    headingclassName="h3"  
                                    headingContent="Incoming Calls"
                                    bodyContent="The number of calls received within the specified Time Period (field below)."
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormInput 
                                    className="form-control form-control-sm"
                                    name="incomingCalls"
                                    type="number"
                                    value={ this.state.incomingCalls }
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,incomingCallsBoundaries"
                                    validationError={ this.state.validationErrors.incomingCallsBoundaries }
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Time Period</strong>
                                </label>
                                <CommonPopover
                                    headingId="timePeriod"
                                    headingclassName="h3"  
                                    headingContent="Time Period"
                                    bodyContent="Length of time measured for Incoming Calls (field above)."
                                    placement="top"
                                />
                            </td>
                            <td>
                                <div className="input-group input-group-sm">
                                    <FormInput
                                        className="form-control form-control-sm"
                                        name="timePeriod"
                                        type="number"
                                        value={ this.state.timePeriod }
                                        handleFieldChange={ this.handleFieldChange }
                                        validations="isExisty,isNumeric,isInt,timePeriodBoundaries"
                                        validationError={ this.state.validationErrors.timePeriodBoundaries }
                                    />
                                    <TimeUnitSelect
                                        selected={ this.state.selections.timePeriodUnits }
                                        handleTimePeriodUnitChange={ this.handleTimePeriodUnitChange }
                                        units={ this.units }
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Average Handle Time</strong>
                                </label>
                                <CommonPopover
                                    headingId="averageHandleTime"
                                    headingclassName="h3"  
                                    headingContent="Average Handle Time (AHT)"
                                    bodyContent="The average amount of time (in seconds) that an agent spends handling a customer's call."
                                    placement="top"
                                />
                            </td>
                            <td>
                                <div className="input-group">
                                    <FormGroupInput
                                        className="form-control form-control-sm"
                                        name="handleTime"
                                        type="number"
                                        value={ this.state.handleTime }
                                        label="Seconds"
                                        handleFieldChange={ this.handleFieldChange }
                                        validations="isExisty,isNumeric,isInt,handleTimeBoundaries"
                                        validationError={ this.state.validationErrors.handleTimeBoundaries }
                                        required
                                    />
                                </div>
                            </td>
                        </tr>
                        {/* To be implemented in the future */}
                        {/* <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Required Service Level</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="serviceLevel"
                                    type="number"
                                    value={ this.state.serviceLevel }
                                    label="%"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,percentageBoundaries"
                                    validationError={ this.state.validationErrors.percentageBoundaries }
                                    required
                                />
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Target Answer Time</strong>
                                </label>
                                <CommonPopover
                                    headingId="targetAnswerTime"
                                    headingclassName="h3"  
                                    headingContent="Target Answer Time"
                                    bodyContent="Time frame target (in seconds) for which it takes the call center to take a call."
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="targetAnswerTime"
                                    type="number"
                                    value={ this.state.targetAnswerTime }
                                    label="Seconds"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,targetAnswerTimeBoundaries"
                                    validationError={ this.state.validationErrors.targetAnswerTimeBoundaries }
                                    required
                                />
                            </td>
                        </tr>
                        {/* To be implemented in the future */}
                        {/* <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Max Occupancy</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="maxOccupancy"
                                    type="number"
                                    value={ this.state.maxOccupancy }
                                    label="%"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,percentageBoundaries"
                                    validationError={ this.state.validationErrors.percentageBoundaries }
                                    required
                                />
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                <div className="form-check form-check-inline">
                                    <strong>Apply Shrinkage</strong>
                                    <input 
                                        name="applyShrinkage"
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="applyShrinkage" 
                                        onChange={ this.handleCheckboxChange }
                                        defaultChecked={ this.state.applyShrinkage }
                                    />
                                </div>
                                <CommonPopover
                                    headingId="shrinkage"
                                    headingclassName="h3"  
                                    headingContent="Shrinkage"
                                    bodyContent="An estimated percentage of time than an agent is being paid in a shift but not able to take calls - such as meetings, calling in sick, or planned vacation. Use the checkbox to include or exclude Shrinkage from the calculation."
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="shrinkage"
                                    type="number"
                                    value={ this.state.shrinkage }
                                    label="%"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,percentageBoundaries"
                                    validationError={ this.state.validationErrors.percentageBoundaries }
                                    required
                                />
                            </td>
                        </tr>
                        {/* To be implemented in the future */}
                        {/* <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Average Patience</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="averagePatience"
                                    type="number"
                                    value={ this.state.averagePatience }
                                    label="Seconds"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,averagePatienceBoundaries"
                                    validationError={ this.state.validationErrors.averagePatienceBoundaries }
                                    required
                                />
                            </td>
                        </tr> */}
                        {/* To be implemented in the future */}
                        {/* <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Week Work Hours</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="weekWorkHours"
                                    type="number"
                                    value={ this.state.weekWorkHours }
                                    label="%"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,percentageBoundaries"
                                    validationError={ this.state.validationErrors.weekWorkHoursBoundaries }
                                    required
                                />
                            </td>
                        </tr> */}
                        {/* To be implemented in the future */}
                        {/* <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Report Interval</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormGroupInput
                                    className="form-control form-control-sm"
                                    name="reportInterval"
                                    type="number"
                                    value={ this.state.reportInterval }
                                    label="Minutes"
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,reportIntervalBoundaries"
                                    validationError={ this.state.validationErrors.reportIntervalBoundaries }
                                    required
                                />
                            </td>
                        </tr> */}
                    </tbody>
                </table>
                <div className="text-center">
                    <button 
                        className={"btn btn-sm btn-r-violet " + (this.state.canSubmit ? "" : "disabled") } 
                        disabled={ !this.state.canSubmit }
                        onClick={ (evt) => this.props.triggerCalculated(evt, this.state) }
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-form" 
                        aria-expanded="true" 
                        aria-controls="collapse-form"
                    >
                        Calculate
                    </button>
                </div>
            </Formsy>
            </div>
        );
    }
    disableButton() {
        this.setState({ canSubmit: false });
    }
    
    enableButton() {
        this.setState({ canSubmit: true });
    }
    handleCheckboxChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.checked
        });
    }
    handleFieldChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleTimePeriodUnitChange(evt) {
        this.setState({
            selections: {
                ...this.state.selections, 
                timePeriodUnits: evt.target.value
            }
        });
    }
    setupValidators() {
        // Custom validators.
        addValidationRule('incomingCallsBoundaries', (values, value) => value > 0 && value <= 30000);
        addValidationRule('timePeriodBoundaries', (values, value) => {
            // To-minutes conversion.
            let converted = value;
            switch (this.state.selections.timePeriodUnits) {
                case 'seconds':
                    converted = value / 60;
                case 'minutes':
                    converted = value;
                break;
                case 'hours':
                    converted = value * 60;
                break;
                case 'months':
                    converted = value * 60 * 31;
                break;
                default:
                    converted = value;
                break;
            }
            return converted > 0 && converted <= 1000
        });
        addValidationRule('percentageBoundaries', (values, value) => value >= 0 && value <= 100);
        addValidationRule('handleTimeBoundaries', (values, value) => value > 0 && value <= 30000);
        addValidationRule('targetAnswerTimeBoundaries', (values, value) => value > 0 && value <= 30000);
        addValidationRule('averagePatienceBoundaries', (values, value) => value > 0 && value <= 1000);
        addValidationRule('weekWorkHoursBoundaries', (values, value) => value > 0 && value <= 80);
        addValidationRule('reportIntervalBoundaries', (values, value) => value >= 5 && value <= 1500);
    }
}

export default Table;