<?php
class LoginForm
{
    public function __construct()
    {
        echo '<div id="myModal" class="modal fade">
            <div class="modal-dialog modal-login">
                <div class="modal-content">
                    <form onsubmit="auth(event)">
                        <div class="modal-header">				
                            <h4 class="modal-title">Login</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                        <p id="error" class="mt-4 text-danger"></p>				
                            <div class="form-group">
                                <label>Username</label>
                                <input id="username" name="username" type="text" class="form-control" required="required">
                            </div>
                            <div class="form-group">
                                <div class="clearfix">
                                    <label>Password</label>
                                </div>                              
                                <input id="password" name="password" type="password" class="form-control" required="required">
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <input type="submit" class="btn btn-primary" value="Login">
                        </div>
                    </form>
                </div>
            </div>
        </div>    
        ';
    }
}
