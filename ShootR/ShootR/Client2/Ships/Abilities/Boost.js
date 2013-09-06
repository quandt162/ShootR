/// <reference path="../../../Scripts/endgate-0.2.0-beta1.d.ts" />
/// <reference path="MovementAbility.ts" />
/// <reference path="../ShipMovementController.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShootR;
(function (ShootR) {
    var Boost = (function (_super) {
        __extends(Boost, _super);
        function Boost(_movementController) {
            _super.call(this, Boost.NAME, _movementController);
            this._movementController = _movementController;
        }
        Boost.prototype.Activate = function () {
            this.MultiplySpeedBy(Boost.SPEED_INCREASE);
            _super.prototype.Activate.call(this);
            this._movementController.Controllable = false;
        };

        Boost.prototype.Deactivate = function () {
            this.ResetSpeed();
            _super.prototype.Deactivate.call(this);
            this._movementController.Controllable = true;
        };

        Boost.prototype.Update = function (gameTime) {
            if (this.Active && eg.TimeSpan.DateSpan(this.ActivatedAt, gameTime.Now).Milliseconds >= Boost.DURATION.Milliseconds) {
                this.Deactivate();
            }
        };
        Boost.NAME = "Boost";
        Boost.SPEED_INCREASE = 3;
        Boost.DURATION = eg.TimeSpan.FromSeconds(3);
        return Boost;
    })(ShootR.MovementAbility);
    ShootR.Boost = Boost;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=Boost.js.map
