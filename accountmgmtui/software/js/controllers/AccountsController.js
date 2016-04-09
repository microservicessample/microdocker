'use strict';

var AccountsController = function ($scope, $http) {
	
    $scope.addNewAccount = function (newItem) {
        $scope.resetError();
        console.log(newItem);
        $http.post(ACCOUNT_CMD_HOST + 'accounts/new',  newItem).success(function (result) {
            $scope.account.initialBalance = '';

            $scope.setSuccess("Account created with id: " + result.accountId);
        }).error(function () {
            $scope.setError('Could not add a new account');
        });
    };

    $scope.queryAccount = function (account) {
        $scope.resetError();
        console.log(account);
        $http.get(ACCOUNT_QUERY_HOST + 'accounts/' + account.checkaccountId).success(function (result) {
        	console.log(result);
            $scope.setSuccess("Account " + result.accountId + " has balance: " + result.initialBalance);
        }).error(function () {
            $scope.setError('Account not found');
        });
    };

    $scope.doTransfer = function (transfer) {
        $scope.resetError();
        console.log(transfer);
        $http.post(ACCOUNT_TRANSFER_HOST + 'transactions', transfer).success(function (result) {
        	console.log(result);
            $scope.setSuccess("Transfer has been successful. RefId: " + result.id);
        }).error(function () {
            $scope.setError('Transfer has not been successful');
        });
    };

    $scope.resetNamesForm = function () {
        $scope.resetError();
        $scope.names = {};
        $scope.search = '';
        $scope.editMode = false;
    };

    $scope.resetError = function () {
        $scope.success = false;
        $scope.successMessage = '';

        $scope.error = false;
        $scope.errorMessage = '';
    };

    $scope.setSuccess = function (message) {
        $scope.success = true;
        $scope.successMessage = message;
    };

    $scope.setError = function (message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };

    //$scope.fetchAccounts();

    $scope.predicate = 'accountId';
};